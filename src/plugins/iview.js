import Vue from "vue";
import iView from "iview";
import iEditor from "iview-editor";
import ryDesign from "ry-design";

Vue.use(iView, {
  select: {
    customArrow: "i-td i-td-arrow_drop_down_px",
    arrowSize: 24
  },
  datePicker: {
    customIcon: "i-td i-td-date"
  },
  menu: {
    customArrow: "i-td i-td-keyboard_arrow_down_",
    arrowSize: 24
  }
});
Vue.use(iEditor);
Vue.use(ryDesign);

import "iview/dist/styles/iview.css";
import "iview-editor/dist/iview-editor.css";
// import 'ry-design/dist/ry-design.css';

