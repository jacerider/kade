/**
 * UserController
 *
 * @description :: Server-side logic for managing users and auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * Return information about currently available roles.
   */
  list: function(req, res) {
    res.json(sails.config.roles);
  }

};
