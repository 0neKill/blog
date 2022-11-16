import { createParamDecorator, ExecutionContext } from '@nestjs/common';


export const GetRefreshToken = createParamDecorator(
    (_: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.refresh_token;
    },
);