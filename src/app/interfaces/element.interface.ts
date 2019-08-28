export interface PeriodicElement {
    basicProperties: BasicProperties,
    thermodynamicProperties?: ThermodynamicProperties,
    materialProperties?: MaterialProperties,
    electromagneticProperties?: ElectromagneticProperties,
    reactivity?: Reactivity,
    atomicProperties?: AtomicProperties,
    abundances?: Abundances,
    nuclearProperties?: NuclearProperties,
    electronInformation?: ElectronInformation
}

interface BasicProperties{
    name?: string,
    symbol?: string,
    atomicNumber?: number,
    atomicMass?: string,
    yearDiscovered?: number,
    type?: string
}

interface ThermodynamicProperties{
    phaseAtSTP?: string | Array<string>,
    meltingPoint?: string | Array<string>,
    boilingPoint?: string | Array<string>,
    meltingPointRank?: number,
    boilingPointRank?: number,
}

interface MaterialProperties{
    density?: string | Array<string>,
    soundSpeed?: string
    thermalConductivity?: string
    densityRank?: number,
    thermalConductivityRank?: number,
    soundSpeedRank?: number
}

interface ElectromagneticProperties{
    magneticType?: string,
    color?: string,
    refractiveIndex?: string
}

interface Reactivity{
    valence?: string,
    electronegativity?: string,
    electronAffinity?: string,
    firstIonizationEnergy?: string
}

interface AtomicProperties{
    termSymbol?: string,
    atomicRadius?: string
}

interface Abundances{
    universeAbundance?: string,
    crustAbundance?: string,
    humanAbundance?: string,
    universeAbundanceRank?: number,
    crustAbundanceRank?: number,
    humanAbundanceRank?: number
}

interface NuclearProperties{
        halfLife?: string,
        stableIsotopes?: string | Array<string>,
        unstableIsotopes?: string | Array<string>
}

interface ElectronInformation{
    electronConfiguration?: string,
    electronsPerShell?: string
}
