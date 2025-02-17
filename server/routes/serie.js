/* The routers folder will contain the files with the endpoints. */

const express = require("express");
const router = express.Router();

const {
    getAllSerie,
    postCreateSerie,
    putUpdateSerie,
    deleteSerie,
} = require("../controllers/serie");

/**
 * @route GET api/serie
 * @description get all serie
 * @access public
 */
router.get("/", getAllSerie);

/**
 * @route POST api/serie
 * @description add a new serie
 * @access public
 */
router.post("/", postCreateSerie);

/**
 * @route PUT api/serie/:id
 * @description update serie
 * @access public
 */
router.put("/:id", putUpdateSerie);

/**
 * @route DELETE api/serie/:id
 * @description delete serie
 * @access public
 */
router.delete("/:id", deleteSerie);

module.exports = router;