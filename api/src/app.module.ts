import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { TypesModule } from './types/types.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BooksModule,
    AuthorsModule,
    GenresModule,
    TypesModule,
    OrdersModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    AuthModule,
  ],
})

export class AppModule {}
