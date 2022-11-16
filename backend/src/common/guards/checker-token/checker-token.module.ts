import { forwardRef, Module } from '@nestjs/common';
import { CheckerTokenService } from './checker-token.service';
import { AuthenticationModule } from '../../../authentication';

@Module({
    imports: [forwardRef(() => AuthenticationModule)],
    providers: [CheckerTokenService],
    exports: [CheckerTokenService],
})
export class CheckerTokenModule {

}