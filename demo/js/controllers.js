'use strict';

function indexCtrl($scope) {
	$scope.fieldTypes = [
		{
			name: 'Text Input',
			value: 'text'
		},
		{
			name: 'Email Input',
			value: 'email'
		},
		{
			name: 'Password Input',
			value: 'password'
		},
		{
			name: 'Number Input',
			value: 'number'
		},
		{
			name: 'Telephone Input',
			value: 'telephone'
		},
		{
			name: 'Textarea',
			value: 'textarea'
		},
		{
			name: 'Radio',
			value: 'radio'
		},
		{
			name: 'Checkbox',
			value: 'checkbox'
		},
		{
			name: 'Select',
			value: 'select'
		}
	];

	$scope.myForm = {
		classes: [],
		attributes: {},
		fields: [],
		groups: []
	};

	$scope.myFormModel = {};
	$scope.currentFormClasses = null;

	$scope.editingField = false;
	$scope.currentField = null;
	$scope.currentFieldType = null;
	$scope.currentFieldModel = null;
	$scope.currentFieldClasses = null;
	$scope.currentLabelClasses = null;

	$scope.editingFieldOption = false;
	$scope.currentFieldOption = null;
	$scope.currentFieldOptionLabelClasses = null;

	$scope.editingGroup = false;
	$scope.currentGroup = null;
	$scope.currentGroupClasses = null;

	$scope.addFormClasses = function() {
		var classArr = $scope.currentFormClasses.split(',');
		$scope.myForm.classes = [];
		angular.forEach(classArr, function(classItem) {
			$scope.myForm.classes.push(classItem);
		});
	};

	$scope.newField = function() {
		$scope.currentFieldType = $scope.fieldTypes[0];
		$scope.currentFieldModel = null;
		$scope.currentFieldClasses = null;
		$scope.currentLabelClasses = null;
		$scope.editingField = true;
		$scope.currentField = {
			label: {
				classes: []
			},
			options: [],
			type: $scope.currentFieldType.value
		};
		$scope.myForm.fields.push($scope.currentField);
	};

	$scope.addFieldType = function() {
		$scope.currentField.type = $scope.currentFieldType.value;
	};

	$scope.addFieldModel = function() {
		var modelStr = 'myFormModel.' + $scope.currentFieldModel;
		$scope.currentField.model = modelStr;
	};

	$scope.addFieldClasses = function() {
		var classArr = $scope.currentFieldClasses.split(',');
		$scope.currentField.classes = [];
		angular.forEach(classArr, function(classItem) {
			$scope.currentField.classes.push(classItem);
		});
	};

	$scope.showFieldOptions = function() {
		if (!$scope.currentFieldType) return false;
		var type = $scope.currentFieldType.value;
		return (type === 'radio' || type === 'checkbox');
	};

	$scope.newFieldOption = function() {
		$scope.editingFieldOption = true;
		$scope.currentFieldOptionLabelClasses = null;
		$scope.currentFieldOption = {
			label: {
				classes: []
			}
		};	
		$scope.currentField.options.push($scope.currentFieldOption);
	};

	$scope.editFieldOption = function(option) {
		$scope.currentFieldOption = option;
		$scope.editingFieldOption = true;
	};

	$scope.deleteFieldOption = function(option) {
		var index = $scope.currentField.options.indexOf(option);
		if (index != -1) {
			$scope.currentField.options.splice(index, 1);
			$scope.currentFieldOption = null;
			$scope.editingFieldOption = false;
		}
	};
 
	$scope.showFieldPlaceholder = function() {
		if (!$scope.currentFieldType) return false;
		var type = $scope.currentFieldType.value;
		return (type === 'text' || type === 'email' || type === 'number' || type === 'password' || type === 'telephone' || type === 'textarea');
	};

	$scope.addLabelClasses = function() {
		var classArr = $scope.currentLabelClasses.split(',');
		$scope.currentField.label.classes = [];
		angular.forEach(classArr, function(classItem) {
			$scope.currentField.label.classes.push(classItem);
		});
	};

	$scope.editField = function(field) {
		$scope.currentModel = (field.model) ? field.model.split('.')[1] : null;
		$scope.currentField = field;
		$scope.editingField = true;
	};

	$scope.deleteField = function(field) {
		var index = $scope.myForm.fields.indexOf(field);
		if (index != -1) {
			$scope.myForm.fields.splice(index, 1);
			$scope.currentField = null;
			$scope.currentModel = null;
			$scope.editingField = false;
		}
	};

	$scope.newGroup = function() {
		$scope.currentGroupClasses = null;
		$scope.editingGroup = true;
		$scope.currentGroup = {
			classes: [],
			attributes: {}
		};
		$scope.myForm.groups.push($scope.currentGroup);
	};

	$scope.editGroup = function(group) {
		$scope.currentGroup = group;
		$scope.editingGroup = true;
	};

	$scope.deleteGroup = function(group) {
		var index = $scope.myForm.groups.indexOf(group);
		if (index != -1) {
			$scope.myForm.groups.splice(index, 1);
			$scope.currentGroup = null;
			$scope.editingGroup = false;
		}
	};

	$scope.addGroupClasses = function() {
		var classArr = $scope.currentGroupClasses.split(',');
		$scope.currentGroup.classes = [];
		angular.forEach(classArr, function(classItem) {
			$scope.currentGroup.classes.push(classItem);
		});
	};

	$scope.form = {
		classes: [],
		attributes: {
			id: 'ballsack'
		},
		fields: [
			{
				label: {
					name: 'Name',
					classes: [],
					wrapField: false
				},
				type: 'text',
				model: 'person.name',
				placeholder: 'Enter name here',
				classes: ['form-control'],
				required: false,
				group: 1
			},
			{
				label: {
					name: 'About Me',
					classes: [],
					wrapField: false
				},
				type: 'textarea',
				model: 'person.description',
				placeholder: 'Enter description here',
				classes: ['form-control'],
				required: true,
				group: 1
			},
			{
				label: {
					name: 'Coding Experience',
					classes: [],
					wrapField: false
				},
				type: 'radio',
				model: 'person.codingExperience',
				group: 1,
				options: [
				{
					label: {
						name: 'Junior',
						classes: [],
						wrapField: true
					},
					value: 'junior',
					group: 3
				},
				{
					label: {
						name: 'Intermediate',
						classes: [],
						wrapField: true
					},
					value: 'intermediate',
					group: 3
				},
				{
					label: {
						name: 'Senior',
						classes: [],
						wrapField: true
					},
					value: 'senior',
					group: 3
				},
				{
					label: {
						name: 'Badass',
						classes: [],
						wrapField: true
					},
					value: 'badass',
					group: 3
				}
				],
				required: true
			},
			{
				label: {
					name: 'Remember Me',
					classes: [],
					wrapField: true
				},
				type: 'checkbox',
				model: 'person.remember',
				group: 2
			},
			{
				label: {
					name: 'Programming Languages',
					classes: [],
					wrapField: false
				},
				type: 'checkbox',
				model: 'person.test.testing.tested.languages',
				options: [
					{
						label: {
							name: 'Java',
							classes: ['checkbox'],
							wrapField: true
						},
						value: 'Java'
					},
					{
						label: {
							name: 'JavaScript',
							classes: ['checkbox'],
							wrapField: true
						},
						value: 'JavaScript'
					},
					{
						label: {
							name: 'C++',
							classes: ['checkbox'],
							wrapField: true
						},
						value: 'C++'
					},
					{
						label: {
							name: 'Python',
							classes: ['checkbox'],
							wrapField: true
						},
						value: 'Python'
					}
				],
				required: true
			},
			{
				label: {
					name: 'Country',
					classes: [],
					wrapField: true
				},
				type: 'select',
				multiple: false,
				model: 'person.country',
				required: true,
				classes: ['form-control'],
				optionsExpression: 'country.name for country in countries'
			},
			{
				label: {
					name: 'Select Cool Bands',
					classes: [],
					wrapField: false
				},
				type: 'select',
				multiple: true,
				model: 'person.favoriteBands',
				required: true,
				classes: ['form-control'],
				optionsExpression: 'band.name for band in bands'
			}
		],
		groups: [
			{
				id: 1,
				name: 'group1',
				classes: ['form-group'],
				attributes: {}
			},
			{
				id: 2,
				name: 'checkboxGroup',
				classes: ['checkbox'],
				attributes: {}
			},
			{
				id: 3,
				name: 'radioGroup',
				classes: ['radio'],
				attributes: {}
			}
		]
	};
}