const MinecraftCommand = require('../../contracts/MinecraftCommand')
const axios = require('axios');

class SkillsCommand extends MinecraftCommand {
  constructor(minecraft) {
    super(minecraft)

    this.name = 'skills'
    this.aliases = []
    this.description = 'Replies with the skills of the player provided.'
  }

  async onCommand(username, message) {
    try {
      const apiUrl = `https://api.mojang.com/users/profiles/minecraft/${message}`;
      const response = await axios.get(apiUrl);

      console.log(response.data);
    } catch (err) {
      console.error(`Error fetching skills ${err}`);
      this.send(`/w ${username} Unable to fetch skills`)
    }
  }
}

module.exports = PingCommand
