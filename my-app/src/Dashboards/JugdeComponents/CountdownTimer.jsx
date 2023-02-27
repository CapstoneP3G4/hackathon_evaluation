import React from 'react-native';
import moment from 'moment';
import TimerMixin from 'react-timer-mixin';

const {
  Text
} = React;

const CountdownTimer = React.createClass({
  mixins: [TimerMixin],

  getDefaultProps: function() {
    return {
      endsAt: moment(),
      onUpdate: () => {}
    };
  },

  destroy: function() {
    this.clearInterval(this.timer);
  },

  componentDidMount: function() {
    this.timeRemaining = () => {
      const now = moment();
      const difference = moment(this.props.endsAt).unix() - now.unix();
      const duration = moment.duration(difference * 1000, 'milliseconds');

      const years           = duration.years(),
            days            = duration.days(),
            hours           = Math.floor(duration.asHours()),
            minutes         = duration.minutes(),
            seconds         = duration.seconds(),
            milliseconds    = duration.milliseconds();

      return {
        years:          years < 0 ? '00' : years,
        days:           days < 0 ? '00' : days,
        hours:          hours < 0 ? '00' : hours,
        minutes:        minutes < 0 ? '00' : minutes,
        seconds:        seconds < 0 ? '00': seconds,
        milliseconds:   milliseconds < 0 ? '00' : milliseconds,
        duration:       duration
      };
    }

    this.tick = () => {
      const remaining = this.timeRemaining();

      this.props.onUpdate(remaining);

      if (remaining.duration.asSeconds() <= 0) {
        return this.destroy();
      }
    }

    this.tick();

    this.timer = this.setInterval(this.tick, 1000);
  },

  render: function() {
    return (
      <Text>
        {this.props.children}
      </Text>
    );
  }
});

export default CountdownTimer;