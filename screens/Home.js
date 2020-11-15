import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  ActivityIndicator,
} from "react-native";
import PlanComponent from "../components/PlanComponent";
import ImagesContainer from "../components/ImagesContainer";
import { connect } from "react-redux";
import { getData } from "../redux/actions";
import { Icon } from "react-native-elements";

const Home = ({ plans, statuses, getDataProp, state }) => {
  const [allPlans, setAllPlans] = useState([]);
  // const [uploadScreenOpen, setUploadScreenOpen] = useState(true);

  useEffect(() => {
    getDataProp();
  }, []);

  useEffect(() => {
    if (plans) {
      setAllPlans(Object.entries(plans));
      // setAllPlans([]);
    }
  }, [plans]);

  return (
    <View style={styles.homeStyle}>
      <Text style={styles.textStyle}>Your plans</Text>
      {allPlans && allPlans.length !== 0 ? (
        <FlatList
          data={allPlans}
          renderItem={({ item }) => (
            <PlanComponent
              planID={item && item[0]}
              planTitle={item && item[1]}
              status={statuses && statuses[item[0]]}
            />
          )}
          keyExtractor={(item) => item[0]}
        />
      ) : (
        <View style={styles.uploadImageContainer}>
          <Image
            style={styles.uploadImage}
            source={require("../assets/2955200_1-01.jpg")}
          />
          <Text style={styles.uploadTextStyle}>Let's store some memories</Text>
        </View>
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

  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  uploadImageContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  uploadImage: {
    marginTop: 80,
    height: 300,
    width: "100%",
    marginBottom: 50,
  },

  uploadTextStyle: {
    fontSize: 23,
    textAlign: "center",
    color: "#f33030",
    fontWeight: "bold"
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
