
import { Body, Controller, Delete, Get, Param, Post, Inject, Injectable, Scope } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Controller('users')
@Injectable({ scope: Scope.REQUEST })
export class UsersController {
    constructor(private readonly usersService: UsersService, 
        @Inject(REQUEST) private readonly request: Request) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        console.log(this.request.body);
        // this.logger.debug(this.request);
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id);
    }
}