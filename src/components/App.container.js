import React, {Component} from 'react';
import {connect} from 'react-redux';

import Venue from 'components/Venue.block';
import Receipt from 'components/Receipt.block';
import {prefillVenue, occupySeats, clickSeat, clearSelection} from 'actions/venue';
import {setMessageVisible} from 'actions/ui';


class App extends Component {

  componentWillMount() {
    this.props.prefillVenue();
  }

  render() {
    const {
      occupied,
      selected,
      occupySeats,
      clickSeat,
      clearSelection,
      setMessageVisible,
      isMessageVisible} = this.props;

    return (
      <div className="Container">
        <h1 className="Title">Касса Кинотеатра</h1>
        <div className="App">
          <div className="App--container">
            <Venue
              occupied={occupied}
              selected={selected}
              occupySeats={occupySeats}
              clickSeat={clickSeat}
              clearSelection={clearSelection}
              setMessageVisible={setMessageVisible}
            />

            <Receipt
              selected={selected}
              isMessageVisible={isMessageVisible}
            />

          </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
    occupied: state.venue.occupied,
    selected: state.venue.selected,
    isMessageVisible: state.ui.isMessageVisible
})

const mapDispatchToProps = (dispatch) => ({
  prefillVenue: () => dispatch(prefillVenue()),
  occupySeats: (seats) => dispatch(occupySeats(seats)),
  clickSeat: (id) => dispatch(clickSeat(id)),
  clearSelection: () => dispatch(clearSelection()),
  setMessageVisible: (flag) => dispatch(setMessageVisible(flag))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
