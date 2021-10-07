/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { user } from '.prisma/client'

const AuthUser = createParamDecorator((ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as user;
    delete user.password;
    return user;
});

export default AuthUser;