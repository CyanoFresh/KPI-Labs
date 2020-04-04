filename = input("Enter filename: ")
resultFile = None

try:
    lineList = [line.rstrip('\n') for line in open(filename)]
    uniqueLines = set(lineList)

    resultFile = open(filename + "_result", "w")
    resultFile.write("\n".join(uniqueLines))
    print("Done: ", filename + "_result")
finally:
    if resultFile:
        resultFile.close()
