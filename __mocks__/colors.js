const colors= jest.genMockFromModule("colors")
colors.blue = s=> s
colors.red = s=> s
colors.green = s=> s

module.exports= colors