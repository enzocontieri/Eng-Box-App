import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    MoreOptions: undefined;
    PostDetails: {
        imageUrl: string;
        title: string;
        description: string;
    }
    Main:undefined;
    LogIn:undefined;
    ForgotPassword:undefined;
    Register:undefined;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;