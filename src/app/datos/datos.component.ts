import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-datos",
  templateUrl: "./datos.component.html",
  styleUrls: ["./datos.component.css"]
})
export class DatosComponent {
  name: string;
  email: string;
  fecha: number;
  direccion: string;

  constructor(public userService: UsersService) {
    this.name = "",
    this.email = "",
    this.fecha = 0,
    this.direccion = "";
  }
}