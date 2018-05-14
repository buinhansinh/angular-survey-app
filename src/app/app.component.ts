import { Component } from '@angular/core';



export class Question {
  constructor(public order: number, public question:string, public category: string, public value = 0){};
}
/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   displayedColumns = ['name', 'value'];
  isLinear = false;
  _questions: Question[] = [];
  current: Question;
  currentIndex = 0;
  showResult = false;
  ngOnInit() {
    this._questions = this.questions.map(q => new Question(q.order,q.question,q.category));
    this.current = this._questions[this.currentIndex];
  }

private onNext(){
  if(++this.currentIndex < this._questions.length){
    this.current = this._questions[this.currentIndex];
  }else{
    this.onComplete();
  }
}

private onYes(){
  this.current.value = 1;
  this.onNext();
}

private onNo(){
  this.current.value = 0;
  this.onNext();
}
categories: any[] = [];
private onComplete(){
  const _categories = [
    {
      name: "A",
      value: 0
    },
     {
      name: "B",
      value: 0
    },
     {
      name: "C",
      value: 0
    },
     {
      name: "D",
      value: 0
    },
  ]

  const result = new Map<string,any>();
  _categories.forEach(c => result.set(c.name,c));
  this._questions.forEach(q => {
    result.get(q.category).value += q.value;
  });
  this.categories = _categories;
  this.showResult=true;


}

  questions = [{order:1,question:"When dealing with people & problems I am seen as determined",category:"D"},{order:2,question:"I am always thinking of new ideas & concepts",category:"C"},{order:3,question:"I feel more comfortable dealing with facts & figures than dealing with people",category:"B"},{order:4,question:"I like traditional practices & accepted ideas best",category:"B"},{order:5,question:"I am a gentle person who enjoys peace and harmony",category:"A"},{order:6,question:"I often upset people with my directness",category:"D"},{order:7,question:"I am inclined to argue with the television or radio when I don't agree with them",category:"C"},{order:8,question:"I like to take my time filling out forms & questionnaires",category:"B"},{order:9,question:"Working on my own is better for me than working with other people",category:"B"},{order:10,question:"I often find myself telling jokes at parties and with friends",category:"C"},{order:11,question:"Before making a decision I like lots of information",category:"B"},{order:12,question:"I am naturally nosier than others around me",category:"C"},{order:13,question:"Getting the task done is more important than people's feelings",category:"D"},{order:14,question:"I describe myself as enthusiastic, spontaneous and persuasive",category:"C"},{order:15,question:"How people feel is very important to me",category:"A"},{order:16,question:"I thoroughly check all small details before coming to a conclusion",category:"B"},{order:17,question:"I can be seen as bossy and rather aggressive at times",category:"D"},{order:18,question:"People say I could sell sand to the Arabs",category:"C"},{order:19,question:"I find small talk difficult & often find myself talking about work",category:"D"},{order:20,question:"I am inclined to criticise people who do not think logically",category:"B"},{order:21,question:"I find being rushed to meet tight deadlines worries me",category:"A"},{order:22,question:"I prefer to be alone than having to mix with others",category:"B"},{order:23,question:"I am seen as a calm, even tempered person, who cares about people & how they feel",category:"A"},{order:24,question:"I like working in a job that I understand and that is systematic & not rushed",category:"A"},{order:25,question:"I am good at talking people into seeing things my way",category:"C"},{order:26,question:"People often call me a perfectionist",category:"B"},{order:27,question:"Having authority and control is very important to me",category:"D"},{order:28,question:"Emotions and feelings are not as important as reason & logic",category:"B"},{order:29,question:"I push my ideas strongly, even if others don't agree",category:"D"},{order:30,question:"I am steady, thorough and analytical",category:"B"},{order:31,question:"I enjoy being the centre of attention",category:"C"},{order:32,question:"I get bored with formality, systems and rigid processes",category:"C"},{order:33,question:"Time is more important to me when doing a job, than people's feelings",category:"D"},{order:34,question:"I enjoy being part of the team more than being the leader",category:"A"},{order:35,question:"Structure, rules and procedures are important to me",category:"B"},{order:36,question:"I am often described as a workaholic",category:"D"},{order:37,question:"I thrive on new, challenging and different tasks",category:"C"},{order:38,question:"I enjoy reading more than talking",category:"B"},{order:39,question:"I don't like being rushed",category:"A"},{order:40,question:"I am highly competitive",category:"D"},{order:41,question:"I make decisions quickly and on my own",category:"D"},{order:42,question:"I tend to listen and be influenced by other people's ideas & suggestions",category:"A"},{order:43,question:"I am a very detailed person",category:"B"},{order:44,question:"I am seen as a controlled, confident & courageous person",category:"D"},{order:45,question:"I tend to be shy and quiet",category:"A"},{order:46,question:"I enjoy parties and am often the entertainment",category:"C"},{order:47,question:"I enjoy new things, even when they are risky",category:"D"},{order:48,question:"People see me as mild and easy going",category:"A"},{order:49,question:"I am confident and sure of myself in most situations",category:"D"},{order:50,question:"I am neat and tidy in just about everything I do",category:"B"},{order:51,question:"I get annoyed when people make light of serious situations",category:"B"},{order:52,question:"I don't like making decisions on my own",category:"A"},{order:53,question:"I have no trouble in making fast & important decisions on my own",category:"D"},{order:54,question:"I often hide how I feel",category:"A"},{order:55,question:"I tend to express exactly how I feel",category:"C"},{order:56,question:"Fine detail is very important to me",category:"B"},{order:57,question:"I get aggravated by people who waste time & lose track in discussions",category:"D"},{order:58,question:"I have a reputation for going into situations too fast",category:"C"},{order:59,question:"I tend to take control in most situations",category:"D"},{order:60,question:"I am more attracted to adventurous ideas than practical ones",category:"C"},{order:61,question:"I am often the one talking in the group",category:"C"},{order:62,question:"When I am upset everyone knows",category:"C"},{order:63,question:"I often put off making the hard decisions",category:"B"},{order:64,question:"I am a patient, even tempered and quiet person",category:"A"},{order:65,question:"I dislike arguing and often give in to people",category:"A"},{order:66,question:"I can be seen as cool and withdrawn by some people",category:"B"},{order:67,question:"I prefer to be the leader than a team player",category:"D"},{order:68,question:"I am a great storyteller and often exaggerate",category:"C"},{order:69,question:"I avoid aggressive and over assertive people",category:"A"},{order:70,question:"Most people see me as a good listener",category:"A"},{order:71,question:"I find expressing my feelings difficult",category:"B"},{order:72,question:"I am known as warm, friendly and understanding",category:"A"},{order:73,question:"I have no problems in expressing my feelings & opinions in meetings & discussions",category:"C"},{order:74,question:"I prefer to listen than to do the talking",category:"A"},{order:75,question:"I enjoy standing up and talking to groups",category:"C"},{order:76,question:"At the end of the day it is efficiency and results that count",category:"D"},{order:77,question:"People often talk to me about their problems",category:"A"},{order:78,question:"I rely on my own decisions rather than other people's opinions",category:"D"},{order:79,question:"I gesture with my hands and talk fast when I get excited",category:"C"}];
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */