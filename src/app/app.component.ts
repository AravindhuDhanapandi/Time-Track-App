import { Component, OnInit } from '@angular/core';
import {SimpleTimer} from 'ng2-simple-timer';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <p>
  ng2-simple-timer is available in
    <a href="https://www.npmjs.com/package/ng2-simple-timer">npm</a> and 
    <a href="https://github.com/J-Siu/ng2-simple-timer">github</a>.
  This example is available in
    <a href="https://github.com/J-Siu/ng2-simple-timer-example">github</a>.
  </p>
  <div style="border: 1px solid;margin:5px;padding:5px">
    <h3>{{title}}</h3>
    <div><button (click)="subscribeTimer0()">{{timer0button}}  1 sec timer0</button>{{counter0}}</div>
    <div><button (click)="subscribeTimer1()">{{timer1button}}  5 sec timer1</button>{{counter1}}</div>
    <div><button (click)="subscribeTimer2()">{{timer2button}} 10 sec timer2</button>{{counter2}}</div>
    <div style="border: 1px solid;margin:5px;padding:5px">
      Timer can no longer be subscribed or unscubscribed once deleted.
      <div><button (click)="delAllTimer()">Delete all timer</button></div>
    </div>`
})
export class AppComponent implements OnInit {
	title = 'Angular2 Simple Timer Service Example';

	counter0 = 0;
	timer0Id: string;
	timer0button = 'Subscribe';

	counter1 = 0;
	timer1Id: string;
	timer1button = 'Subscribe';

	counter2 = 0;
	timer2Id: string;
	timer2button = 'Subscribe';

	// Define SimpleTimer as 'st'
	constructor(private st: SimpleTimer) { }

	ngOnInit() {
		this.st.newTimer('1sec',1);
		this.st.newTimer('5sec',5);
		this.st.newTimer('10sec',10);
		this.subscribeTimer0();
		this.subscribeTimer1();
		this.subscribeTimer2();
	}

	delAllTimer() {
		this.st.delTimer('1sec');
		this.st.delTimer('5sec');
		this.st.delTimer('10sec');
	}

	subscribeTimer0() {
		if (this.timer0Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer0Id);
			this.timer0Id = undefined;
			this.timer0button = 'Subscribe';
			console.log('timer 0 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer0Id = this.st.subscribe('1sec',() => this.timer0callback());
			this.timer0button = 'Unsubscribe';
			console.log('timer 0 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer1() {
		if (this.timer1Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer1Id);
			this.timer1Id = undefined;
			this.timer1button = 'Subscribe';
			console.log('timer 1 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer1Id = this.st.subscribe('5sec', () => this.timer1callback());
			this.timer1button = 'Unsubscribe';
			console.log('timer 1 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	subscribeTimer2() {
		if (this.timer2Id) {
			// Unsubscribe if timer Id is defined
			this.st.unsubscribe(this.timer2Id);
			this.timer2Id = undefined;
			this.timer2button = 'Subscribe';
			console.log('timer 2 Unsubscribed.');
		} else {
			// Subscribe if timer Id is undefined
			this.timer2Id = this.st.subscribe('10sec', ()=> this.timer2callback());
			this.timer2button = 'Unsubscribe';
			console.log('timer 2 Subscribed.');
		}
		console.log(this.st.getSubscription());
	}

	timer0callback() {
		this.counter0++;
	}

	timer1callback() {
		this.counter1++;
	}

	timer2callback() {
		this.counter2++;
	}
}
