import{AbstractControl,FormGroup} from "@angular/forms";

/** Stworzone przez Michał Deja  */

export function equalFieldsValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control: AbstractControl = <AbstractControl>formGroup.get(controlName);
    const matchingControl: AbstractControl = <AbstractControl>formGroup.get(matchingControlName);

    if (matchingControl.errors && !matchingControl.errors['mustEqual']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustEqual: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
