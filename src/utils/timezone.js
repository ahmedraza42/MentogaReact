import moment from 'moment'
export const dateTimetoUTC=(datetime)=> {
    let dateTime_ = new Date(datetime);
    var utcDate = dateTime_.toISOString().replace('T', ' ').replace('Z', '');
    return utcDate;
}

export const dateTimetoUTC2=(datetime)=> {
    let dateTime_ = new Date(datetime);
    var utcDate = dateTime_.toISOString().replace('Z', '');
    return utcDate;
}

export const uTCtoDateTime=(datetime)=> {
    let dateTime_ = new Date(datetime);
    var year = dateTime_.getFullYear();
    var month = (dateTime_.getMonth() + 1) < 10 ? '0' + (dateTime_.getMonth() + 1) : (dateTime_.getMonth() + 1);
    var date = dateTime_.getDate() < 10 ? '0' + dateTime_.getDate() : dateTime_.getDate();
    var hours = dateTime_.getHours() < 10 ? '0' + dateTime_.getHours() : dateTime_.getHours();
    var minutes = dateTime_.getMinutes() < 10 ? '0' + dateTime_.getMinutes() : dateTime_.getMinutes();

    return new Date(year + '-' + month + '-' + date + 'T' + hours + ':' + minutes + 'Z');
}

export const formatTo24Hour=(datetime)=> {
    
    var hours = Number(datetime.match(/^(\d+)/)[1]);
    var minutes = Number(datetime.match(/:(\d+)/)[1]);
    var AMPM = datetime.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;

    return sHours + ":" + sMinutes;
}

export const formatAMPM=(hour, minutes)=> {
    var suffix = hour >= 12 ? "PM" : "AM";
    return ((hour + 11) % 12 + 1) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + suffix;
}

export  const getLocalDate = (time, date) => {
    if (time && date) {
      const rr = moment(date);
      const res = formatTo24Hour(time);
      var date = moment.utc().format(`${rr.format("yyyy-MM-DD")} ${res}:00`);
      var stillUtc = moment.utc(date).toDate();
      var local = moment(stillUtc).local().format("YYYY-MM-DD HH:mm:ss");
      let formatedDate = moment(local).format("YYYY-MM-DD");
      return formatedDate;
    } else {
      return "";
    }
  };
  export const getLocalTime = (time, date) => {
    if (time && date) {
      const res = formatTo24Hour(time);
      var date = moment.utc().format(`${date} ${res}:00`);
      var stillUtc = moment.utc(date).toDate();
      var local = moment(stillUtc).local().format("YYYY-MM-DD HH:mm:ss");
      let formatedDate = moment(local).format("h:mm A");
      return formatedDate;
    } else {
      return "";
    }
  };

  export const getLocalDateWithMoment = (time, date) => {
    if (time && date) {
      const rr = moment(date,'MMM DD yyyy');
      const res = formatTo24Hour(time);
      var date = moment.utc().format(`${rr.format("yyyy-MM-DD")} ${res}:00`);
      var stillUtc = moment.utc(date).toDate();
      var local = moment(stillUtc).local().format("YYYY-MM-DD HH:mm:ss");
      let formatedDate = moment(local).format('MMM DD yyyy');
      return formatedDate;
    } else {
      return "";
    }
  };

  export const checkIfmeetingAvailableOrNot=(item)=>{
    let isAvailable = false;
    let formatDate = getLocalDateWithMoment(item?.toTiming, item?.scheduledDate);
    let formatTime = getLocalTimeWithMoment(item?.toTiming, item?.scheduledDate);
    let date1 = moment(formatDate + " " + formatTime,'MMM DD, yyyy hh:mm A');
    let date2 = moment();
    if (moment(date1).isBefore(date2)) {
      isAvailable = false;
    } else {
      isAvailable = true;
    }
    return isAvailable;
  }
  export const getLocalTimeWithMoment = (time, date) => {
    if (time && date) {
      // const rr = moment(date);
      const rr = moment(date,'MMM DD yyyy');
      const res = formatTo24Hour(time);
      var date = moment.utc().format(`${rr.format("yyyy-MM-DD")} ${res}:00`);
      var stillUtc = moment.utc(date).toDate();
      var local = moment(stillUtc).local().format("YYYY-MM-DD HH:mm:ss");
      let formatedDate = moment(local).format("h:mm A");
      return formatedDate;
    } else {
      return "";
    }
  };

  export  const getUTCforCalender = (time, date) => {
    if (time && date) {
      const rr = moment(date);
      const res = formatTo24Hour(time);
      var date = moment
        .utc()
        .format(`${rr.format("YYYY-MM-DD")}T${res}:00.000[Z]`);
      return date;
    } else {
      return "";
    }
  };