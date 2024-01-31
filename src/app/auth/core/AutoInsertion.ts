import {Directive} from "@angular/core";
import {Store} from "@ngxs/store";

@Directive()
export class AutoInsertion {
  constructor(private readonly accessToThePermissiveStore: Store) {}


}

