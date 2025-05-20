type UserSettingsStateT = {
  autoContinue: boolean;
};

/**Settings that influence how the game controls or displays, but not the actual rules of the game.
 * Might be changed before or during the game. */
class UserSettings {
  parameters: UserSettingsStateT = {
    autoContinue: false,
  };

  constructor(params?: UserSettingsStateT) {
    if (params) this.parameters = params;
  }
}

export default UserSettings;
