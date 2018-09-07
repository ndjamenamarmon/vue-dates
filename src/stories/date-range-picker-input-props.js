import moment from "moment";
import { storiesOf } from "storybook-vue";
import DateRangePicker from "./date-range-picker-wrapper";
import { VERTICAL_ORIENTATION } from "../constants";

storiesOf("DateRangePicker - Input Props", module)
  .add("default", () => ({
    render() {
      return <DateRangePicker />;
    }
  }))
  .add("with custom arrow icon", () => ({
    render() {
      return (
        <DateRangePicker customArrowIcon="-->" />
      );
    }
  }))
// TODO: Fix small styling for date range picker
//   .add("small styling", () => ({
//     render() {
//       return (
//         <DateRangePicker small={true} />
//       );
//     }
//   }))
  
