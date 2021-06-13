import {PasswordDto} from "./password-dto";

export class SignupDto {
  public username!: string;
  public password!: PasswordDto ;
 public name: string | undefined;
 public lastname: string | undefined
}
