export class GetServersDto {
    page: number;
    limit: number;
    sortBy: 'name:ASC' | 'name:DESC' | 'version:ASC' | 'version:DESC' | 'priority:ASC' | 'priority:DESC';
}
