import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Image } from "react-native";
import PlanComponent from "../components/PlanComponent";
import ImagesContainer from "../components/ImagesContainer";
import { connect } from "react-redux";
import { getData } from "../redux/actions";

const Home = ({ plans, statuses, getDataProp, state }) => {
  const [allPlans, setAllPlans] = useState([]);
  // const [uploadScreenOpen, setUploadScreenOpen] = useState(true);

  useEffect(() => {
    getDataProp();
  }, []);

  useEffect(() => {
    if (plans) {
      setAllPlans(Object.entries(plans));
    }
  }, [plans]);

  return (
    <View style={styles.homeStyle}>
      <Text style={styles.textStyle}>Your plans</Text>
      {allPlans ? (
        <FlatList
          data={allPlans}
          renderItem={({ item }) => (
            <PlanComponent
              planID={item[0]}
              planTitle={item[1]}
              status={statuses[item[0]]}
            />
          )}
          keyExtractor={(item) => item[0]}
        />
      ) : (
        <Text>Wait</Text>
      )}
      <ImagesContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    paddingTop: 22,
    paddingHorizontal: 22,
    display: "flex",
    height: "79%",
  },

  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  plans: state.plans,
  statuses: state.statuses,
  state,
});

const mapDispatchToProps = (dispatch) => ({
  getDataProp: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
