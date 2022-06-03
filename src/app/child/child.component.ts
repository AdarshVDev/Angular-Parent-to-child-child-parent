import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: " app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  @Input() message: string = "Child to Parent Component";

  // message: string = "Child to Parent Component";

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {}

  sendMessage(value: "string") {
    this.messageEvent.emit(value);
  }

  ngOnInit() {}
}
