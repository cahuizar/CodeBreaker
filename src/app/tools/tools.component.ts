import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
    tools = [
        { name:'Frequency', img:'assets/frequency.svg', path:'/frequency'  },
        { name:'IC ', img:'assets/ic.svg', path:'/ic'  },
        { name:'Worksheet', img:'assets/worksheet.svg', path:'/worksheet'  },
    ]
  constructor() { }

  ngOnInit() {
  }

}
