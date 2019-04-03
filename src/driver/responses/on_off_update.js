const Enum = require('../enum.js');

module.exports = {
	id: 0x8095,
	name: "on_off_update",
	parse: function(reader, rep) {
		rep.sequence = reader.nextUInt8();
		rep.endpoint = reader.nextUInt8();
		rep.cluster = Enum.CLUSTERS(reader.nextUInt16BE(), new Error("default_response: unknown cluster"));
		rep.addressmode = Enum.ADDRESS_MODE(reader.nextUInt8());
		rep.address = reader.nextUInt16BE();
		rep.status = Enum.ON_OFF_UPDATE(reader.nextUInt8());
	},
};
