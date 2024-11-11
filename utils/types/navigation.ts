import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    MoreOptions: undefined;
    PostDetails: {
        imageUrl: string;
        title: string;
        description: string;
    }
    Main: undefined;
    PrivacyPolicy: undefined;
    LogIn: undefined;
    ForgotPassword: undefined;
    Register: undefined;
    Quiz: undefined;
    QuizzResult: { score: number; total: number };
    ChangeName: undefined;
    ChangeUsername: undefined;
    ChangeEmail: undefined;
    ChangePassword: undefined;
    ChangeTelephone: undefined;
}

type NavigationProp = StackNavigationProp<RootStackParamList>;