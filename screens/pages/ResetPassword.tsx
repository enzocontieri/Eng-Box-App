import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types/navigation';
import ChangePasswordForm from './../../Components/forms/ChangePasswordForm';

type ResetPasswordScreenScreenRouteProp = RouteProp<
	RootStackParamList,
	'ResetPassword'
>;

type ResetPasswordProps = {
	route: ResetPasswordScreenScreenRouteProp;
};

const ResetPassword = ({ route }: ResetPasswordProps) => {
	const { email } = route.params;

	return <ChangePasswordForm email={email} />;
};

export default ResetPassword;
