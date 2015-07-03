// The row.js view-controller reads the values of the arguments passed to it by the createController() method,
// and assigns the proper values to the name and nickname Label elements

var args = arguments[0] || {};

// Note 'dogFullName' is not an element on the xml view but it gets created on the fly by the following statement
$.row.petID = args.pet_id_from_master;
$.row.petFullName = args.pet_name_from_master;
$.row.petType = args.pet_type;

$.pet_name.text = args.pet_name_from_master;
$.pet_breed.text = args.pet_breed_from_master;
$.pet_gender.text = args.pet_gender_from_master;
$.pet_age.text = args.pet_age_from_master;
$.pet_photo.image = args.pet_photo_from_master;

