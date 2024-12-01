import { StackNavigationProp } from '@react-navigation/stack';
import { RegisterFormData } from './form/formData';

export type RootStackParamList = {
	MoreOptions: undefined;
	PostDetails: {
		id:number,
		imageUrl: any;
		titulo: string;
		conteudo: string;
	};
	Profile: undefined;
	PersonalData: undefined;
	Sobre: undefined;
	Help: undefined;
	Notifications: undefined;
	Wellcome: undefined;
	Main: undefined;
	PrivacyPolicy: undefined;
	LogIn: undefined;
	ForgotPassword: undefined;
	Register: undefined;
	Quiz: { user: RegisterFormData };
	QuizzResult: { score: number };
	ChangeName: undefined;
	ChangeUsername: undefined;
	ChangeEmail: undefined;
	ChangePassword: undefined;
	ChangeTelephone: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
