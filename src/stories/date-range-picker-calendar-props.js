import moment from "moment";
import { storiesOf } from "storybook-vue";
import DateRangePicker from "./date-range-picker-wrapper";
import { VERTICAL_ORIENTATION } from "../constants";

storiesOf("DateRangePicker - Calendar Props", module)
  .add("default", () => ({
    render() {
      return <DateRangePicker />;
    }
  }))
  .add("anchored right", () => ({
    render() {
      return (
        <DateRangePicker anchorDirection="right" style={{float: "right"}} />
      );
    }
  }))
  .add("with RTL support (and anchor right)", () => ({
    render() {
      return (
        <DateRangePicker isRTL={true} anchorDirection="right" style={{float: "right"}} />
      );
    }
  }))
  
