import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CommonService, DoctorService } from 'src/app/core/service/service.index';

@Component({
  selector: 'app-schedule-timing',
  templateUrl: './schedule-timing.component.html',
  styleUrls: ['./schedule-timing.component.css']
})
export class ScheduleTimingComponent implements OnInit {
  userId = null;
  schedule : any;
  selectWeekday : any;
  modalData : any;
  selectedDuration : any;
  selectedStartTiming = "";
  selectedStartOptions: any;
  selectedEndTiming  = "";
  selectedEndOptions: any;
  // slotStartSettings : any;
  // slotEndSettings : any;
  slots = [ "6:00 am","6:15 am","6:30 am","6:45 am","7:00 am","7:15 am","7:30 am","7:45 am","8:00 am","8:15 am","8:30 am",
            "8:45 am","9:00 am","9:15 am","9:30 am","9:45 am","10:00 am","10:15 am","10:30 am","10:45 am","11:00 am",
            "11:15 am","11:30 am","11:45 am","0:00 pm","0:15 pm","0:30 pm","0:45 pm","1:00 pm","1:15 pm","1:30 pm","1:45 pm",
            "2:00 pm","2:15 pm","2:30 pm","2:45 pm","3:00 pm","3:15 pm","3:30 pm","3:45 pm","4:00 pm","4:15 pm","4:30 pm",
            "4:45 pm","5:00 pm","5:15 pm","5:30 pm","5:45 pm","6:00 pm","6:15 pm","6:30 pm","6:45 pm","7:00 pm", "7:15 pm",
            "7:30 pm","7:45 pm","8:00 pm","8:15 pm","8:30 pm","8:45 pm","9:00 pm"];
  durations = [
    "15 mins",
    "30 mins",
    "45 mins",
    "1 Hour"
  ];
  days = [
    { weekday: 'sunday', 
      slots: [
      ]
    },
    { weekday: 'monday', 
      slots: [
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },]
    },
    { weekday: 'tuesday', slots: [
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },] },
    { weekday: 'wednesday', slots: [
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },] },
    { weekday: 'thursday', slots: [
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },] },
    { weekday: 'friday', slots: [
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },
      {
        startTime : '8:00 pm',
        endTime : '11:30 pm',
      },] },
    { weekday: 'saturday', slots: [
      ] },
  ];
  constructor(
    public commonService: CommonService,
    public DoctorService: DoctorService,
  ) { }

  ngOnInit(): void {
    const userinfo = JSON.parse(localStorage.getItem('userinfo') || '{}');
    const userId = userinfo.id;
    // console.log("UserID",userId);
    this.DoctorService.getScheduleTiming({id:userId})
      .then((res ) => {
        // console.log("OK",res);
        this.schedule = res.data;
        this.modalData = res.data.find(item => item.weekday == "monday");
        console.log("modal",this.modalData)
        this.userId = userId;
        // this.schedule = res.data;
      })
      .catch(error=>{
        console.error("Fetching error");
      })
      
    // console.log("User", this.schedule, this.slots, this.durations);
  }
  // addSchedule( schedule ) {
  //   this.DoctorService.addScheduleTiming({id:userId})
  //     .then(res=> {

  //     })
  //     .catch(error=>{

  //     })
  // }
  
  
  onDurationChange(selectedDuration: string) {
    console.log("Duration Changed", selectedDuration);
  }
  
  onStartTimingChange(selectedStartTiming: string) {
    let endSlots :string[] = [];
    endSlots = this.fromStart(selectedStartTiming, this.selectedDuration);
    this.selectedEndOptions = endSlots;
    console.log("Start Timing", this.selectedEndOptions, selectedStartTiming);
    console.log("start Modal",this.modalData);
  }
  

  onEndTimingChange(selectedEndTiming: string) {
    let startSlots :string[] = [];
    startSlots = this.fromEnd(selectedEndTiming, this.selectedDuration);
    this.selectedStartOptions = startSlots;
    console.log("End Timing", this.selectedStartOptions, selectedEndTiming);
    console.log("end Modal",this.modalData);
  }
  
  fromStart(startTiming: any, duration: any){
    const durationIndex = this.durations.indexOf(duration) + 1;
    let slotIndex = this.slots.indexOf(startTiming);
    let options : string[] = [];
    // options.push(startTiming);
    console.log("options", options)
    while(slotIndex + durationIndex <this.slots.length){
      options.push(this.slots[slotIndex + durationIndex]);
      slotIndex += durationIndex;
      console.log("options in while", slotIndex, options);
    }
    return options;
  }
  fromEnd(endTiming: any, duration: any){
    const durationIndex = this.durations.indexOf(duration) + 1;
    let slotIndex = this.slots.indexOf(endTiming);
    let options : string[] = [];
    // options.push(endTiming);
    console.log("options", options)
    while(slotIndex - durationIndex >=0 ){
      options.push(this.slots[slotIndex - durationIndex]);
      slotIndex -= durationIndex;
      console.log("options in while", slotIndex, options);
    }
    return options;
  }
  addSlot(){
    const item = {
      "startTime" : "6:00 am",
      "endTime" : "6:30 am"
    }
    this.modalData.slots.push(item);
    console.log("Add event",this.modalData) 
  }
  selectDay(day: string){
    this.selectWeekday = day;
    this.modalData = this.schedule.find(item => item.weekday == day);
    console.log("selectDay",this.modalData);
  }
  deleteSlot(selectedStartTiming, selectedEndTiming){
    let modalDataRow = this.modalData.slots.findIndex(item => (
      item.startTime == selectedStartTiming && item.endTime == selectedEndTiming
    ))
    let modalDataSlots = this.modalData.slots.splice(modalDataRow, 1);
    this.modalData.Slots =  modalDataSlots;
    console.log("Delete ",this.modalData);
  }
}
