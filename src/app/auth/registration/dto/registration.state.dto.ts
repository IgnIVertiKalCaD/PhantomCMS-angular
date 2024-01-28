import {RegistrationDto} from "@/app/auth/registration/dto/registration.dto";

export class RegistrationStateDto extends RegistrationDto {
  isLoading: boolean;
  success: boolean;
  error: boolean | null;
}
