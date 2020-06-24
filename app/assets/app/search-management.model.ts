export class SolrIndex {
  id: string;
  name: string;
  description: string;
}

export class InputTag {
  id: string;
  solrIndexId?: string;
  property?: string;
  value: string;
  displayValue: string
}

export class SynonymRule {
  id: string;
  synonymType: number;
  term: string;
  isActive: boolean;
}

export class UpDownRule {
  id: string;
  upDownType?: number;
  boostMalusValue?: number;
  term: string;
  upDownDropdownDefinitionMapping?: number;
  suggestedSolrFieldName?: string;
  isActive: boolean;
}

// TODO consider other persistence solution (e.g. REST)
export const upDownDropdownDefinitionMappings = [
  { displayName: 'UP(+++++)', upDownType: 0, boostMalusValue: 500 },
  { displayName: 'UP(++++)', upDownType: 0, boostMalusValue: 100 },
  { displayName: 'UP(+++)', upDownType: 0, boostMalusValue: 50 },
  { displayName: 'UP(++)', upDownType: 0, boostMalusValue: 10 },
  { displayName: 'UP(+)', upDownType: 0, boostMalusValue: 5 },
  { displayName: 'DOWN(-)', upDownType: 1, boostMalusValue: 5 },
  { displayName: 'DOWN(--)', upDownType: 1, boostMalusValue: 10 },
  { displayName: 'DOWN(---)', upDownType: 1, boostMalusValue: 50 },
  { displayName: 'DOWN(----)', upDownType: 1, boostMalusValue: 100 },
  { displayName: 'DOWN(-----)', upDownType: 1, boostMalusValue: 500 }
];

export class FilterRule {
  id: string;
  term: string;
  suggestedSolrFieldName?: string;
  isActive: boolean;
}

export class DeleteRule {
  id: string;
  term: string;
  isActive: boolean;
}

export class RedirectRule {
  id: string;
  target: string;
  isActive: boolean;
}

export class SearchInput {
  id: string;
  term: string;
  synonymRules: Array<SynonymRule>;
  upDownRules: Array<UpDownRule>;
  filterRules: Array<FilterRule>;
  deleteRules: Array<DeleteRule>;
  redirectRules: Array<RedirectRule>;
  tags: Array<InputTag>;
  isActive: boolean;
  comment: string;
}

export class SuggestedSolrField {
  id: string;
  name: string;
}

export class DeploymentLogInfo {
  msg: string;
}

export class AlternateSpelling {
  id: string;
  canonicalSpellingId: string;
  term: string
}

export class CanonicalSpelling {
  id: string;
  solrIndexId: string;
  term: string;
  alternateSpellings: Array<AlternateSpelling>;
}

export enum ListItemType {
  RuleManagement, Spelling
}

export class ListItem {
  id: string;
  term: string;
  itemType: ListItemType;
  isActive: boolean;
  synonyms: Array<string>;
  tags: Array<InputTag>;
  comment: string
}
