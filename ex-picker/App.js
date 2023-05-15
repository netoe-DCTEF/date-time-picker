import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible_2, setDatePickerVisibility_2] = useState(false);
  const [dataString, setDataString] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const formattedDate =
      date.getDate().toString().padStart(2, "0") +
      "/" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getFullYear();
    // console.log(formattedDate);
    setDataString(formattedDate);
    hideDatePicker();
  };

  const showDatePicker_2 = () => {
    setDatePickerVisibility_2(true);
  };

  const hideDatePicker_2 = () => {
    setDatePickerVisibility_2(false);
  };

  const handleConfirm_2 = (date) => {
    // console.warn("A date has been picked: ", date);
    const formattedDate = date;
    // console.log(formattedDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.margin_bottom}>Data: {dataString}</Text>
      <Button title="Escolher Data" onPress={showDatePicker} />
      <Button title="Escolher Hora" onPress={showDatePicker_2} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        //mode="time"
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible_2}
        //mode="time"
        mode="time"
        onConfirm={handleConfirm_2}
        onCancel={hideDatePicker_2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  margin_bottom: {
    marginBottom: 30,
  },
});

export default App;
