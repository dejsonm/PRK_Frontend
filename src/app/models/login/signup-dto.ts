import {PasswordDto} from "./password-dto";

/** Stworzone przez Michał Deja  */

export class SignupDto {
  public username!: string;
  public password!: PasswordDto ;
 public name: string | undefined;
 public lastname: string | undefined
}
