import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import UserOutput from "../../components/User/UserOutput";
import ErrorOverLay from "../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../components/Ui/Handle/LoadingOverLay";
import { UserContext } from "../../store/context/InforUser-Context";
import { fetchInforUsers } from "../../util/InforUsers";
function InformationScreen({ navigation }) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const userCtx = useContext(UserContext);
  useEffect(() => {
    async function getUser() {
      setIsFetching(true);
      try {
        const infors = await fetchInforUsers();
        userCtx.setUser(infors);
      } catch (error) {
        setError("Could not fetch information user!");
      }
      setIsFetching(false);
    }
    getUser();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverLay message={error} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <UserOutput
        users={userCtx.users}
        usersPeriod="Total number"
        fallbackText="Hi! you don't have user information!"
      />
    </View>
  );
}

export default InformationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
