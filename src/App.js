import SpaceNavigator from "./components/SpaceNavigator/SpaceNavigator";
import ViewerTemplate from "./components/ViewerTemplate/ViewerTemplate";
import Viewer from "./components/Viewer";
import * as api from './lib/api';
import { Component } from "react";
import moment from "moment";

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  /*
  getAPOD = (date) => {
    api.getAPOD(date).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.error(e);
    });
  }*/


  getAPOD = async (date) => {
    if (this.state.loading) return;

    this.setState({
      loading: true
    });

    try {
      const res = await api.getAPOD(date);
      const { date: retrievedDate, url, media_type: mediaType } = res.data;
      console.log(retrievedDate, url, mediaType);
      if (!this.state.maxDate) {
        this.setState({
          maxDate: retrievedDate
        });
      }
      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

      console.log(res);
    } catch (e) {
      console.error(e);
    }

    this.setState({
      loading: false
    });
  }

  componentDidMount() {
    this.getAPOD();
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if (date === maxDate) return;
    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(prevDate);
  }

  render() {
    const { url, mediaType, loading } = this.state;

    return (
      <div>
        <ViewerTemplate
          spaceNavigator={<SpaceNavigator onNext={this.handleNext} onPrev={this.handlePrev} />}
          viewer={
            <Viewer
              url={url}
              mediaType={mediaType}
              loading={loading} />
          }
        />
      </div >
    );
  }
}

export default App;
