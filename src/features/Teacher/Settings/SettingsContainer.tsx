import AccountDetails from './components/AccountDetails';
import PlayersList from './components/PlayersList';

export default function SettingsContainer() {
	return (
		<div className="w-auto flex flex-col gap-8 m-[40px]">
			{/* Account Details Section */}
			<section className="w-auto flex flex-col ">
				<div className="rounded-xl overflow-hidden bg-white shadow-sm">
					<div className="flex flex-col">
						<AccountDetails />
					</div>
				</div>
			</section>

			{/* Players List Section */}
			<section className="w-full">
				<PlayersList />
			</section>
		</div>
	);
}


