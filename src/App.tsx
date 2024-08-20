import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Inject, ScheduleComponent, Day, Week, Month, TimelineViews, Resize, DragAndDrop, ResourcesDirective, ResourceDirective, GroupModel } from '@syncfusion/ej2-react-schedule';



export default class App extends React.Component<{},{}> {
  private localData = [{
   
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 4, 9, 0),
     EndTime: new Date(2020, 9, 4, 15, 0),
     ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 5, 9, 0),
    EndTime: new Date(2020, 9, 5, 15, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 6, 9, 0),
    EndTime: new Date(2020, 9, 6, 15, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 7, 9, 0),
    EndTime: new Date(2020, 9, 7, 15, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 8, 9, 0),
    EndTime: new Date(2020, 9, 8, 15, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 9, 9, 0),
    EndTime: new Date(2020, 9, 9, 15, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 10, 9, 0),
    EndTime: new Date(2020, 9, 10, 15, 0),
    ResourceID: 1
   },
   {
   Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 4, 15, 0),
     EndTime: new Date(2020, 9, 4, 16, 0),
     ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Nutrition',
    StartTime: new Date(2020, 9, 5, 15, 0),
    EndTime: new Date(2020, 9, 5, 16, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Nutrition',
    StartTime: new Date(2020, 9, 6, 15, 0),
    EndTime: new Date(2020, 9, 6, 16, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Nutrition',
    StartTime: new Date(2020, 9, 7, 15, 0),
    EndTime: new Date(2020, 9, 7, 16, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Nutrition',
    StartTime: new Date(2020, 9, 8, 15, 0),
    EndTime: new Date(2020, 9, 8, 16, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Nutrition',
    StartTime: new Date(2020, 9, 9, 15, 0),
    EndTime: new Date(2020, 9, 9, 16, 0),
    ResourceID: 1
   },
   {
    Id: 1,
    Subject: 'Nutrition',
    StartTime: new Date(2020, 9, 10, 15, 0),
    EndTime: new Date(2020, 9, 10, 16, 0),
    ResourceID: 1
   },
   {
    Id: 1,
      Subject: 'Exercise',
      StartTime: new Date(2020, 9, 4, 22, 0),
      EndTime: new Date(2020, 9, 4, 23, 0),
      ResourceID: 1
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 5, 22, 0),
     EndTime: new Date(2020, 9, 5, 23, 0),
     ResourceID: 1
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 6, 22, 0),
     EndTime: new Date(2020, 9, 6, 23, 0),
     ResourceID: 1
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 7, 22, 0),
     EndTime: new Date(2020, 9, 7, 23, 0),
     ResourceID: 1
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 8, 22, 0),
     EndTime: new Date(2020, 9, 8, 23, 0),
     ResourceID: 1
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 9, 22, 0),
     EndTime: new Date(2020, 9, 9, 23, 0),
     ResourceID: 1
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 10, 22, 0),
     EndTime: new Date(2020, 9, 10, 23, 0),
     ResourceID: 1
    },
    {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 4, 19, 0),
      EndTime: new Date(2020, 9, 4, 21, 0),
      ResourceID: 1
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 5, 19, 0),
      EndTime: new Date(2020, 9, 5, 21, 0),
      ResourceID: 1
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 6, 19, 0),
      EndTime: new Date(2020, 9, 6, 21, 0),
      ResourceID: 1
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 7, 19, 0),
      EndTime: new Date(2020, 9, 7, 21, 0),
      ResourceID: 1
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 8, 19, 0),
      EndTime: new Date(2020, 9, 8, 21, 0),
      ResourceID: 1
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 9, 19, 0),
      EndTime: new Date(2020, 9, 9, 21, 0),
      ResourceID: 1
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 10, 19, 0),
      EndTime: new Date(2020, 9, 10, 21, 0),
      ResourceID: 1
     },
   {
   Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 4, 9, 0),
     EndTime: new Date(2020, 9, 4, 15, 0),
     ResourceID: 2
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 5, 9, 0),
    EndTime: new Date(2020, 9, 5, 15, 0),
    ResourceID: 2
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 6, 9, 0),
    EndTime: new Date(2020, 9, 6, 15, 0),
    ResourceID: 2
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 7, 9, 0),
    EndTime: new Date(2020, 9, 7, 15, 0),
    ResourceID: 2
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 8, 9, 0),
    EndTime: new Date(2020, 9, 8, 15, 0),
    ResourceID: 2
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 9, 9, 0),
    EndTime: new Date(2020, 9, 9, 15, 0),
    ResourceID: 2
   },
   {
    Id: 1,
    Subject: 'Sleeping',
    StartTime: new Date(2020, 9, 10, 9, 0),
    EndTime: new Date(2020, 9, 10, 15, 0),
    ResourceID: 2
   },
   {
    Id: 1,
      Subject: 'Nutrition',
      StartTime: new Date(2020, 9, 4, 15, 0),
      EndTime: new Date(2020, 9, 4, 16, 0),
      ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 5, 15, 0),
     EndTime: new Date(2020, 9, 5, 16, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 6, 15, 0),
     EndTime: new Date(2020, 9, 6, 16, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 7, 15, 0),
     EndTime: new Date(2020, 9, 7, 16, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 8, 15, 0),
     EndTime: new Date(2020, 9, 8, 16, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 9, 15, 0),
     EndTime: new Date(2020, 9, 9, 16, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Nutrition',
     StartTime: new Date(2020, 9, 10, 15, 0),
     EndTime: new Date(2020, 9, 10, 16, 0),
     ResourceID: 2
    },
    {
    Id: 1,
      Subject: 'Exercise',
      StartTime: new Date(2020, 9, 4, 22, 0),
      EndTime: new Date(2020, 9, 4, 23, 0),
      ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 5, 22, 0),
     EndTime: new Date(2020, 9, 5, 23, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 6, 22, 0),
     EndTime: new Date(2020, 9, 6, 23, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 7, 22, 0),
     EndTime: new Date(2020, 9, 7, 23, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 8, 22, 0),
     EndTime: new Date(2020, 9, 8, 23, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 9, 22, 0),
     EndTime: new Date(2020, 9, 9, 23, 0),
     ResourceID: 2
    },
    {
     Id: 1,
     Subject: 'Exercise',
     StartTime: new Date(2020, 9, 10, 22, 0),
     EndTime: new Date(2020, 9, 10, 23, 0),
     ResourceID: 2
    },
    {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 4, 19, 0),
      EndTime: new Date(2020, 9, 4, 21, 0),
      ResourceID: 2
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 5, 19, 0),
      EndTime: new Date(2020, 9, 5, 21, 0),
      ResourceID: 2
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 6, 19, 0),
      EndTime: new Date(2020, 9, 6, 21, 0),
      ResourceID: 2
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 7, 19, 0),
      EndTime: new Date(2020, 9, 7, 21, 0),
      ResourceID: 2
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 8, 19, 0),
      EndTime: new Date(2020, 9, 8, 21, 0),
      ResourceID: 2
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 9, 19, 0),
      EndTime: new Date(2020, 9, 9, 21, 0),
      ResourceID: 2
     },
     {
      Id: 1,
      Subject: 'Nap',
      StartTime: new Date(2020, 9, 10, 19, 0),
      EndTime: new Date(2020, 9, 10, 21, 0),
      ResourceID: 2
     },
   {
    Id: 1,
      Subject: 'Sleeping',
      StartTime: new Date(2020, 9, 4, 0, 0),
      EndTime: new Date(2020, 9, 4, 8, 0),
      ResourceID: 3
    },
    {
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 5, 0, 0),
     EndTime: new Date(2020, 9, 5, 8, 0),
     ResourceID: 3
    },
    {
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 6, 0, 0),
     EndTime: new Date(2020, 9, 6, 8, 0),
     ResourceID: 3
    },
    {
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 7, 0, 0),
     EndTime: new Date(2020, 9, 7, 8, 0),
     ResourceID: 3
    },
    {
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 8, 0, 0),
     EndTime: new Date(2020, 9, 8, 8, 0),
     ResourceID: 3
    },
    {
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 9, 0, 0),
     EndTime: new Date(2020, 9, 9, 8, 0),
     ResourceID: 3
    },
    {
     Id: 1,
     Subject: 'Sleeping',
     StartTime: new Date(2020, 9, 10, 0, 0),
     EndTime: new Date(2020, 9, 10, 8, 0),
     ResourceID: 3
    },
    {
      Id: 1,
        Subject: 'Nutrition',
        StartTime: new Date(2020, 9, 4, 8, 0),
        EndTime: new Date(2020, 9, 4, 9, 0),
        ResourceID: 3
      },
      {
       Id: 1,
       Subject: 'Nutrition',
       StartTime: new Date(2020, 9, 5, 8, 0),
       EndTime: new Date(2020, 9, 5, 9, 0),
       ResourceID: 3
      },
      {
       Id: 1,
       Subject: 'Nutrition',
       StartTime: new Date(2020, 9, 6, 8, 0),
       EndTime: new Date(2020, 9, 6, 9, 0),
       ResourceID: 3
      },
      {
       Id: 1,
       Subject: 'Nutrition',
       StartTime: new Date(2020, 9, 7, 8, 0),
       EndTime: new Date(2020, 9, 7, 9, 0),
       ResourceID: 3
      },
      {
       Id: 1,
       Subject: 'Nutrition',
       StartTime: new Date(2020, 9, 8, 8, 0),
       EndTime: new Date(2020, 9, 8, 9, 0),
       ResourceID: 3
      },
      {
       Id: 1,
       Subject: 'Nutrition',
       StartTime: new Date(2020, 9, 9, 8, 0),
       EndTime: new Date(2020, 9, 9, 9, 0),
       ResourceID: 3
      },
      {
       Id: 1,
       Subject: 'Nutrition',
       StartTime: new Date(2020, 9, 10, 8, 0),
       EndTime: new Date(2020, 9, 10, 9, 0),
       ResourceID: 3
      },
      {
        Id: 1,
          Subject: 'Exercise',
          StartTime: new Date(2020, 9, 4, 15, 0),
          EndTime: new Date(2020, 9, 4, 16, 0),
          ResourceID: 3
        },
        {
         Id: 1,
         Subject: 'Exercise',
         StartTime: new Date(2020, 9, 5, 15, 0),
         EndTime: new Date(2020, 9, 5, 16, 0),
         ResourceID: 3
        },
        {
         Id: 1,
         Subject: 'Exercise',
         StartTime: new Date(2020, 9, 6, 15, 0),
         EndTime: new Date(2020, 9, 6, 16, 0),
         ResourceID: 3
        },
        {
         Id: 1,
         Subject: 'Exercise',
         StartTime: new Date(2020, 9, 7, 15, 0),
         EndTime: new Date(2020, 9, 7, 16, 0),
         ResourceID: 3
        },
        {
         Id: 1,
         Subject: 'Exercise',
         StartTime: new Date(2020, 9, 8, 15, 0),
         EndTime: new Date(2020, 9, 8, 16, 0),
         ResourceID: 3
        },
        {
         Id: 1,
         Subject: 'Exercise',
         StartTime: new Date(2020, 9, 9, 15, 0),
         EndTime: new Date(2020, 9, 9, 16, 0),
         ResourceID: 3
        },
        {
         Id: 1,
         Subject: 'Exercise',
         StartTime: new Date(2020, 9, 10, 15, 0),
         EndTime: new Date(2020, 9, 10, 16, 0),
         ResourceID: 3
        },
  ];
  
  public resourceDataSource: Object[] = [
    {Name: 'Chris', Id:1, Color: '#ea7a57'},
    {Name: 'Anatoly', Id:2, Color: '#357CD2'},
    {Name: 'Ivan', Id:3, Color: '#7fa900'}
  ];

  public groupData: GroupModel = {
    resources: ['Resources'],
    //Change the arrangement by date but not by Person (video 9 8:40)
    byDate: true

  };
  
  public render() {
   return <ScheduleComponent height = '650px' selectedDate={new Date(2020, 9, 4)}
   eventSettings={{dataSource: this.localData}}
   views = {['Day', 'Week', 'Month','TimelineDay','TimelineWeek']} group={this.groupData}>
       <ResourcesDirective>
         <ResourceDirective field='ResourceID' title='Resource Name' name='Resources'
         textField='Name' idField='Id' colorField='Color' 
         dataSource={this.resourceDataSource}>
         </ResourceDirective>
       </ResourcesDirective>
     <Inject services={[Day, Week, Month, TimelineViews, Resize, DragAndDrop]} />
   </ScheduleComponent>
  }
}