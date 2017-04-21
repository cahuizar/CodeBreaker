import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
    tools = [
        { name:'Frequency', img:'assets/frequency.png', path:'/frequency'  },
        { name:'IC ', img:'assets/ic.png', path:'/ioc'  },
        { name:'Worksheet', img:'assets/worksheet.png', path:'/worksheet'  },
    ]
  constructor() { }

  ngOnInit() {
  }

}
