import { StackNavigationProp } from '@react-navigation/stack';
import { RegisterFormData } from './form/formData';

export type RootStackParamList = {
	MoreOptions: undefined;
	PostDetails: {
		id: number;
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
	Quiz: undefined;
	QuizzResult: { score: number };
	QuizPresentation: undefined;
	ChangeName: undefined;
	ChangeUsername: undefined;
	ChangeEmail: undefined;
	ChangePassword: undefined;
	ChangeTelephone: undefined;
	ResetPassword: { email: string };
	AddHint: undefined;
	Menu: undefined;
};

export type NavigationProp = StackNavigationProp<RootStackParamList>;
