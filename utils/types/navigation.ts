import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    MoreOptions: undefined;
    PostDetails: {
        imageUrl: string;
        title: string;
        description: string;
    }
}

type NavigationProp = StackNavigationProp<RootStackParamList>;