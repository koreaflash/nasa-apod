import SpaceNavigator from "./components/SpaceNavigator/SpaceNavigator";
import ViewerTemplate from "./components/ViewerTemplate/ViewerTemplate";
import Viewer from "./components/Viewer";
import * as api from './lib/api';
import { Component } from "react";

class App extends Component {
  /*
  getAPOD = (date) => {
    api.getAPOD(date).then((res) => {
      console.log(res)
    });
  }*/

  getAPOD = async (date) => {
    try {
      const res = await api.getAPOD(date);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    return (
      <div>
        <ViewerTemplate
          spaceNavigator={<SpaceNavigator />}
          viewer={
            /*
            <Viewer
              url="https://apod.nasa.gov/apod/image/1712/GeminidsYinHao1024.jpg"
              mediaType="image" />
              */
            <Viewer
              url="https://www.youtube.com/embed/uj3Lq7Gu94Y?rel=0"
              mediaType="video" />
          }
        />
      </div >
    );
  }
}

export default App;
