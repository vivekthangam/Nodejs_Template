var _textmodel = `const ${model} = require("../model/${model}.model");
const asyncHandler = require("../middeware/aync");

//@desc     Get all ${model}s
//@route    GET /api/v1/${model}s
//@access   Public
exports.get${model}s = asyncHandler(async (req, res, next) => {
    console.log("test")
  const _${model} = await ${model}.find();
  res.status(200).json({
    sucess: false,
    count: _${model}.length,
    data: _${model},
    msg: \`Show ${model} \${req.params.id}\`,
  });
});

//@desc     Get Single ${model}s
//@route    GET /api/v1/${model}s/:id
//@access   Public
exports.get${model} = asyncHandler(async (req, res, next) => {
  const _${model} = await ${model}.findById(req.params.id);

  if (!_${model}) {
    next(err);
    // next(new ErrorRespone(\`${model}s id \${req.params.id}  is not available at the moment\`, 404));
  }

  res.status(200).json({
    sucess: false,
    data: _${model},
    msg: \`Show ${model} \${req.params.id}\`,
  });
});

//@desc     Create ${model}s
//@route    POST /api/v1/${model}s
//@access   Public
exports.create${model} = asyncHandler(async (req, res, next) => {
  const _${model} = await ${model}.create(req.body);
  res.status(201).json({
    sucess: true,
    data: _${model},
    msg: "Create new ${model}s",
  });
});

//@desc     Update Single ${model}s
//@route    PUT /api/v1/${model}s/:id
//@access   Public
exports.update${model} = asyncHandler(async (req, res, next) => {
  const _${model} = await ${model}.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!_${model}) {
    next(err);
  }

  res.status(200).json({
    sucess: false,
    data: _${model},
    msg: \`Show ${model} \${req.params.id}\`,
  });
});

//@desc     Delte Single ${model}s
//@route    DELETE /api/v1/${model}s/:id
//@access   Public
exports.Delete${model} = asyncHandler(async (req, res, next) => {
  const _${model} = await ${model}.findByIdAndDelete(req.params.id);

  if (!_${model}) {
    next(err);
  }

  res.status(200).json({
    sucess: false,
    data: _${model},
    msg: \`Show ${model} \${req.params.id}\`,
  });
});`





exports.Model = _textmodel;