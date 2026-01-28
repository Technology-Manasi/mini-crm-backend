import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // Load .env globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // JWT configuration
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'super_secret_jwt_key',
      signOptions: {
        expiresIn: 86400, // ✅ 1 day in seconds (string avoided)
      },
    }),

    // Global Prisma module
    PrismaModule,

    // Feature modules
    AuthModule,
    UsersModule,
    CustomersModule,
    TasksModule,
  ],
})
export class AppModule {}
