import { useState, useContext } from "react";
import { Alert, View, Platform, KeyboardAvoidingView } from "react-native";

import AuthContent from "../../components/Auth/AuthContent";
import LoadingOverlay from "../../components/Ui/Handle/LoadingOverLay";
import { login } from "../../util/Auth";
import { AuthContext } from "../../store/context/Auth-Context";
import Logo from "../../components/Ui/Display/Logo";
import { Title } from "../../components/Ui/Display/Title";
import { stylesLogScreen } from "../../constants/Styles";

function LoginScreen({}) {
  const authCtx = useContext(AuthContext);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ phone, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(phone, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log in. Please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return (
    <View style={stylesLogScreen.container}>
      <KeyboardAvoidingView
        style={stylesLogScreen.containerAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Logo />
        <View style={stylesLogScreen.formContainer}>
          <Title titleLabel="Xin chào!" />
          <AuthContent isLogin onAuthenticate={loginHandler} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default LoginScreen;
