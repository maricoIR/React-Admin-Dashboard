import Layout from "../layout/Layout";
import { useState } from "react";
import "./styles.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/data";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  const {
    state: { activePage },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ activePage: "Calandar" });
  }, [activePage, dispatch]);
  return (
    <Layout>
      <div className="w-full xl:mb-0 mb-6">
        <ScheduleComponent
          height="650px"
          ref={(schedule) => setScheduleObj(schedule)}
          selectedDate={new Date(2021, 0, 10)}
          eventSettings={{ dataSource: scheduleData }}
          dragStart={onDragStart}
        >
          <ViewsDirective>
            {["Day", "Week", "Month", "Agenda"].map((item) => (
              <ViewDirective key={item} option={item} />
            ))}
          </ViewsDirective>
          <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
      </div>
    </Layout>
  );
};

export default Calendar;
